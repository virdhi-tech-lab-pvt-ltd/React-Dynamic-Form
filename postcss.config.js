module.exports = {
  plugins: {
    'postcss-import': {
    	path: ['node_modules', 'src']
    },
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
  },
};