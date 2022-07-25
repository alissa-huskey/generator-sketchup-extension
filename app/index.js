'use strict';
const Generator = require('yeoman-generator');
const licenses = require('generator-license').licenses;
const chalk = require('chalk');                           // CLI colors
const yosay = require('yosay');                           // like cowsay but for yoeman
const _ = require('lodash');                              // utility library
const execSync = require('child_process').execSync;       // shell execution

module.exports = class extends Generator {
  // print a debug message if in debug mode
  debug(...args) {
    if (this.config.debug == false) {
      return;
    }
    this.log(chalk.yellow("debug> "), ...args)
  }

  // print an objects attributes
  inspect(obj) {
    for (var key in obj) {
      this.debug(`${key}: ${obj[key]}`)
    }
  }

  async initializing() {
    this.config.defaults({
      sketchup_version: undefined,
      debug: false,
    });

    this.debug("initializing()");

    // get the sketchup version if needed
    if (this.config.get("sketchup_version") == undefined) {
      let version = execSync('ruby app/get_version.rb').toString().trim();
      this.config.set('sketchup_version', version);
    }
  }

  constructor(args, opts) {
    super(args, opts);
    this.debug("constructor()");

    this.option('dest', {
      type: String,
      desc: 'Destination folder',
      alias: "d",
      default: _.kebabCase(this.appname),
    });

    this.option('name', {
      type: String,
      desc: 'Extension name',
      alias: 'n',
      default: _.startCase(this.appname),
    });

    this.option('version', {
      type: String,
      desc: 'Extension version',
      alias: 'v',
      default: '0.1.0'
    });

    this.option('author', {
      type: String,
      desc: 'Author name',
      alais: 'a',
      default: this.user.git.name() || 'John Doe',
    });

    this.option('email', {
      type: String,
      desc: 'Author email',
      alias: 'e',
      default: this.user.git.email() || 'john.doe@example.com',
    });

    this.option('website', {
      type: String,
      desc: 'Website',
      alias: 'w',
      default: 'https://example.com',
    });

    this.option('summary', {
      type: String,
      desc: 'Short description',
      alias: 's',
      default: 'An extension for SketchUp.'
    });

    this.option('license', {
      type: String,
      desc: 'License',
      alias: 'l',
      default: 'MIT',
      choices: licenses,
    });

    this.option('sketchup_version', {
      type: Number,
      desc: 'Minimum SketchUp version',
      alias: 'm',
      default: this.config.get("sketchup_version"),
    });
  }

  async prompting() {
    this.debug("prompting()")

    this.log(
      yosay(
        `Welcome to the ${chalk.red('sketchup-extension')} generator!`
      )
    );

    this.answers = await this.prompt([
      {
        name: 'name',
        type: String,
        message: 'Extension Name:',
        default: this.options.name,
      },
      {
        name: 'dest',
        type: String,
        message: 'Destination Folder:',
        default: this.options.dest,
      },
      {
        name: 'version',
        type: String,
        message: 'Version:',
        default: this.options.version
      },
      {
        name: 'author',
        type: String,
        message: 'Author Name:',
        default: this.options.author,
      },
      {
        name: 'email',
        type: String,
        message: 'Author Email:',
        default: this.options.email,
      },
      {
        name: 'website',
        type: String,
        message: 'Website:',
        default: this.options.website,
      },
      {
        name: 'summary',
        type: String,
        message: 'Short Description:',
        default: this.options.summary,
      },
      {
        name: 'sketchup_version',
        message: 'Minimum SketchUp Version:',
        default: this.options.sketchup_version,
        type: Number,
      },
      {
        type: 'list',
        name: 'license',
        message: 'License:',
        default: this.options.license,
        choices: licenses,
        // validate: (value) => {
        //   return validateString(value) && validateRequired(value)
        // }
      },
    ]);


    this.answers.fs_name = _.snakeCase(this.answers.name);
    this.answers.today = new Date();
    this.answers.year = this.answers.today.getFullYear();
  }

  default() {
    this.debug("default()");

    // this will generate the actual LICENCE.txt file
    // in the writing() step
    this.composeWith(
      require.resolve('generator-license'), {
        name: this.answers.author,
        email: this.answers.email,
        website: this.answers.website,
        license: this.answers.license,
        year: this.answers.year,
        output: 'LICENSE.txt',
    });
  }

  writing() {
    this.debug("writing()")

    if (this.abort) {
      return;
    }

    this.destinationRoot(this.destinationPath(this.answers.dest))
    this.sourceRoot(this.templatePath());
    this.env.cwd = this.destinationPath();

    this.log(`Writing in ${this.destinationPath()}...`);

    this._writeTemplate("README.md");
    this._writeTemplate("CHANGELOG.md")

    this._writeTemplate(
      "loader.rb",
      this.answers.fs_name + '.rb',
    );

    this._writeTemplate(
      "main.rb",
      this.answers.fs_name + '/' + 'main.rb',
    );

  }

  // install a template file
  _writeTemplate(src, dest) {
    if (arguments.length == 1) {
      dest = src;
    }

    this.debug("writeTemplate()", "src:", src, "dest:", dest);

    this.fs.copyTpl(
      this.templatePath(src),
      this.destinationPath(dest),
      this.answers
    );
  }

  // install a template file
  _writeFile(src, dest) {
    if (arguments.length == 1) {
      dest = src;
    }

    this.debug("writeFile()", "src:", src, "dest:", dest);

    this.fs.copy(
      this.templatePath(src),
      this.destinationPath(dest)
    );
  }
};
