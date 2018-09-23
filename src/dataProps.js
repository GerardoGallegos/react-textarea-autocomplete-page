export default [
  {
    propName: 'list',
    type: 'Array',
    default: '[ ]',
    description: 'List of items ans suggest'
  },
  {
    propName: 'minChar',
    type: 'Number',
    default: '2',
    description: 'Min characters for trigger after the char #'
  },
  {
    propName: 'char',
    type: 'String',
    default: '#',
    description: 'Character of search, example #'
  },
  {
    propName: 'maxSuggest',
    type: 'Number',
    default: '[ ]',
    description: 'Max lenght of items in suggest'
  },
  {
    propName: 'mode',
    type: 'String',
    default: 'infinite',
    description: 'Behavior in key navegations infinite || lock'
  },
  {
    propName: 'addChar',
    type: 'Boolean',
    default: 'true',
    description: 'Adds the character in textarea when is selected'
  },
  {
    propName: 'showCharInList',
    type: 'Boolean',
    default: 'true',
    description: 'Adds the character in the select list'
  },
  {
    propName: 'spellcheck',
    type: 'Boolean',
    default: 'false',
    description: 'Spellcheck in textarea'
  },
  {
    propName: 'listClass',
    type: 'String',
    default: '""',
    description: 'Class css in the ul list'
  },
  {
    propName: 'activeItemClass',
    type: 'String',
    default: '""',
    description: 'Class css in the li item active'
  },
  {
    propName: 'inactiveItemClass',
    type: 'String',
    default: '""',
    description: 'Class css in the li item inactive'
  },
  {
    propName: 'activeItemStyle',
    type: 'Object',
    default: '{ }',
    description: 'Styles in active item'
  },
  {
    propName: 'inactiveItemStyle',
    type: 'Object',
    default: '{ }',
    description: 'Styles in inactive item'
  },
  {
    propName: 'charStyle',
    type: 'Object',
    default: '{ }',
    description: 'Char styles in the item'
  }
]
