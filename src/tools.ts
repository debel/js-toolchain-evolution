interface toolDef {
  year: number;
  desc?: string;
  pro?: string;
  con?: string;
  sampleLang?: string;
  sample?: string;
}

const tools = {
  jasmine: {
    year: 2010,
    desc: "The first popular JS testing framework",
    sample: `
  describe("A suite is just a function", function() {
    it("and so is a spec", function() {
      expect(myFunc()).toBe(true);
    })
  })
    `
  },
  CoffeeScript: {
    year: 2010,
    desc: "The first popular JS variant",
    pro: 'forced the development of JS itself',
    con: "very opinionated, confusing syntax",
    sample: `
  compose = (f, g) -> (x) -> f g x

  square = (x) -> x * x
  addSix = (x) -> x + 6

  addSixThenSquare = compose square, addSix

  console.log addSixThenSquare(9)

  console.log [0..4].map square
    `
  },
  Browserify: {
    year: 2011,
    desc: "The first node.js based bundler",
    pro: "provided some shims for the builtin node modules",
    con: "simple concat, only works with require calls",
    sampleLang: 'bash',
    sample: `
      browserify main.js -o bundle.js
    `
  },
  Grunt: {
    year: 2012,
    desc: "The first purpose built js task runner",
    pro: "large plugin ecosystem",
    con: "verbose JSON config",
    sample: `
  grunt.initConfig({
    concat: { /* concat config */ },
    uglify: { /* uglify config */ },
    my_src_files: ['src/*.js', 'vendor/*.js'],
  });
    `
  },
  "webpack": {
    year: 2012,
    desc: "still the most popular build tool",
    pro: 'code splitting & lazy loading',
    con: 'slower build times',
    sample: `
  {
    entry: './src/index.tsx',
    output: { filename: 'bundle.js', path: './dist') },
    devtool: 'source-map',
    resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
    module: {
      rules: [
        { test: /\.tsx?$/, use: 'ts-loader' },
        { test: /\.jsx?$/, use: 'babel-loader' }
      ]
    },
    optimization: { minimize: true }
  };`
  },
  "TypeScript": {
    year: 2012,
    desc: 'the most helpful but annoying linter',
    pro: 'you can use types in your javascript',
    con: 'you have to use types in your javascript',
    sampleLang: 'TypeScript',
    sample: `
  type LightSwitchConfig = { on: boolean; off: boolean; toggle: () => void };

  type LightSwitch = Omit<Pick<LightSwitchConfig, keyof LightSwitchConfig>, 'toggle'> & {
    state: Awaited<Promise<Extract<keyof Pick<LightSwitchConfig, 'on' | 'off'>, string>>>;
    flip: (...args: Parameters<LightSwitchConfig['toggle']>) =>
      ReturnType<typeof Promise.resolve<void>>;
  };
    `
  },
  Gulp: {
    year: 2013,
    desc: "A task runner with a better API",
    pro: "very flexible API",
    con: "more manual and more complex",
    sample: `
  gulp.task('build', () => {
    return gulp.src('src/**/*.{ts,tsx,jsx}')
      .pipe(sourcemaps.init())
      .pipe(ts({ jsx: 'react' }))
      .pipe(babel({ presets: ['@babel/preset-react'] }))
      .pipe(concat('bundle.js'))
      .pipe(uglify())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist'));
  });
    `
  },
  eslint: {
    year: 2013,
    desc: 'One linter to rule them all',

  },
  babel: {
    year: 2014,
    desc: 'With the rapid evolution of the language came the need for transpilation',
    sample: `
  {
    "plugins": [
      "@babel/plugin-transform-react-jsx",
      "@babel/plugin-transform-typescript"
    ]
  }
    `
  },
  jest: {
    year: 2014,
    desc: 'Facebook open-sources their testing framework',
    pro: 'easy mocking and snapshots, react-ready',
    con: 'lots of dependencies, problematic ESM support',
    sample: `
  describe('my beverage', () => {
    test('is beer', () => {
      expect(myBeverage.type).toBeInstanceOf(Beer);
    });

    test('is sour', () => {
      expect(myBeverage.sour).toBeTruthy();
    });
  });
    `
  },
  rollup: {
    year: 2015,
    pro: 'native ESM, tree shaking',
    con: 'no code splitting, no assets handling',
    sample: `
  {
    entry: 'src/index.js',
    dest: 'dist/bundle.js',
    format: 'umd',
    moduleName: 'MyLibrary',
    plugins: [
      resolve({ jsnext: true, browser: true }),
      commonjs(),
      babel({ presets: ['es2015-rollup'] }),
      uglify()
    ]
  }
    `
  },
  prettier: {
    year: 2017,
  },
  puppeteer: {
    year: 2017,
    desc: 'He who controls the browser, can run e2e tests'
  },
  parcel: {
    year: 2017,
    desc: "Some tools don't last, but they pave the way",
    pro: 'zero configuration out-of-box',
    con: 'smaller ecosystem',
    sample: `
  {
    /* not needed in the majority of cases */
    "extends": "@parcel/config-default",
  }`
  },
  nx: {
    year: 2019,
    desc: 'Put all your projects in one basket'
  },
  esbuild: {
    year: 2020,
  },
  swc: {
    year: 2020,
  },
  vite: {
    year: 2020,
    pro: 'fast and extensible',
    con: 'requires modern browsers',
    sample: `
  defineConfig({
    plugins: [react()],
    build: {
      sourcemap: true,
      minify: 'terser',
      rollupOptions: {
        output: { entryFileNames: 'bundle.js' }
      }
    },
    esbuild: { jsx: 'automatic' }
  });`
  },
  turbopack: {
    year: 2022,
  },
  unjs: {
    year: 2022,
    desc: "a collection of independent JS tools",
  },
  biome: {
    year: 2023,
  },
  jsr: {
    year: 2023,
    desc: 'a package registry for the new age'
  },
  oxc: {
    year: 2025,
  }
} as Record<string, toolDef>;

const packageMngrs = {
  npm: {
    year: 2010,
    desc: "the first JS package manager",
    pro: "a vast repository of ready-to-use tools and libraries",
    con: "enabling side-chain attacks since before it was cool",
  },
  yarn: {
    year: 2015,
    desc: 'move aside npm there is a faster cowboy in town',
    pro: 'lockfile, faster than npm (at the time)',
    con: 'lock file conflicts, disk space usage'
  },
  pnpm: {
    year: 2016,
    desc: 'an even better package manager',
    pro: 'dependency deduplication, even faster',
    con: 'compatiblity & symlinks issues'
  }
} as Record<string, toolDef>;

const frameworks = {
  "Backbone.js": {
    year: 2010,
    desc: "The first popular js framework",
    pro: "familiar and flexible",
    con: "stuck in the MVC past",
    sample: `
  const Todo = Backbone.Model.extend({
    defaults: { title: '', completed: false }
  });

  const TodoView = Backbone.View.extend({
    render: function() {
      this.$el.html(' ' + this.model.get('title'));
      return this;
    }
  });
    `
  },
  "Angular": {
    year: 2010,
    desc: "Google releases its own framework",
    pro: "full featured with routing, forms and batteries included",
    con: "heavy and brittle",
    sample: `
  angular.module('todoApp', [])
    .controller('TodoCtrl', function($scope) {
      $scope.todo = { title: 'Angular', completed: false };
      $scope.toggle = function() {
        $scope.todo.completed = !$scope.todo.completed;
      };
    });
    `
  },
  "react": {
    year: 2013,
    desc: "starts the component revolution",
    pro: "uni-directional dataflow, JSX",
    con: "complex rendering flow infects every aspect of the page",
    sample: `
  class TodoItem extends React.Component {
    state = { completed: false };
    
    toggleComplete = () => {
      this.setState({ completed: !this.state.completed });
    };
    
    render() {
      return (
        <div onClick={this.toggleComplete}>
          {this.props.todo.title}
        </div>
      );
    }
  }
    `
  },
  "electron": {
    year: 2013,
    desc: 'Now your desktop app can be slow and bloated too!',
    sample: `
  const { app, BrowserWindow } = require('electron/main')

  app.whenReady().then(() => {
    const win = new BrowserWindow({ width: 800, height: 600 })

    win.loadFile('index.html')
  })
    `
  },
  "vue": {
    year: 2014,
    pro: "approachable and incremental",
    con: "bespoke template syntax",
    sampleLang: 'vue',
    sample: `
  <template>
    <div @click="completed = !completed">
      <input type="checkbox" v-model="completed" />
      <span>{{ todo.title }}</span>
    </div>
  </template>
    `
  },
  "svelte": {
    year: 2016,
    pro: "no virtual DOM, fast!",
    con: "smaller ecosystem and community",
    sampleLang: 'svelte',
    sample: `
  <script>
    let completed = false;
    let todo = { title: 'Learn Svelte' };
  </script>

  <div on:click={() => completed = !completed}>
    <input type="checkbox" bind:checked={completed} />
    <span>{todo.title}</span>
  </div>
    `
  },
  "next.js": {
    year: 2016,
    desc: "React with batteries included!",
    pro: "full stack framework",
    con: "vendor lock-in",
    sampleLang: 'jsx',
    sample: `
  export default async function TodosPage() {
    const todos = await fetchTodos();

    return (
      <div>
        {todos.map(todo => (<Todo {...todo} />))}
      </div>
    );
  }
    `
  },
  "astro": {
    year: 2022,
    desc: 'a meta framework focused on SSG',
    pro: 'flexible - supports most all rendering frameworks',
    con: 'custom syntax, immature server/api support',
    sampleLang: 'astro',
    sample: `
  ---
    import {logo} from '../assets/logo.svg'
    
    const { data } = Astro.props;
  ---

  <Layout>
    <header><Image src={logo} />My project</header>
    {data && <Chart data={data} />}
  </Layout>
    `
  }
} as Record<string, toolDef>;

const runtimes = {
  "node.js": {
    year: 2009,
    sample: `
  const http = require('http');

  const server = http.createServer(function (req, res) {
    res.end('Hello, World!');
  });

  server.listen(8080);
    `
  },
  deno: {
    year: 2020,
  },
  bun: {
    year: 2021,
  }
} as Record<string, toolDef>;

export default { ...tools, ...frameworks, ...runtimes, ...packageMngrs };
