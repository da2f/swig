var defaults = {
    varControls: ['<=', '=>'],
    tagControls: ['<%', '%>'],
    cmtControls: ['<#', '#>']
  },
  filters = {
    hello: function (input) {
      return 'hello ' + input;
    }
  },
  tags = {
    world: {
      parse: function (str, line, parser, types) {
        return true;
      },
      compile: function (compiler, args, content, parents, options, blockName) {
        return compiler(content) + '_output += " world";\n';
      },
      ends: true
    }
  };

module.exports = {
  defaults: defaults,
  filters: filters,
  tags: tags
};
