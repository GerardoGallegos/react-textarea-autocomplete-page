export default [
  {
    description: 'Write some and add #a to show de suggest',
    code: `// You can add some words in the list
    <Textarea
      char='#'
      list={[
        'tacos',
        'blackberry',
        'watermelon',
        'kiwi',
        'chili',
        'lemon',
        'orange',
        'pineaple'
      ]}
    />`
  },
  {
    description: 'You can change the trigger character, example @cool',
    code: `// You can add some words in the list
    <Textarea
      char='@'
      list={[
        'tacos',
        'blackberry',
        'watermelon',
        'kiwi',
        'chili',
        'lemon',
        'orange',
        'pineaple',
        'cool'
      ]}
    />`
  },
  {
    description: 'You can change the styles',
    code: `// You can add some words in the list
    <Textarea
      char='#'
      activeItemStyle={{ background: 'orange', color: '#2f2f2f'}}
      inactiveItemStyle={{ background: '#2f2f2f', color: '#FFF' }}
      list={[
        'tacos',
        'blackberry',
        'watermelon',
        'kiwi',
        'chili',
        'lemon',
        'orange',
        'pineaple'
      ]}
    />`
  },
  {
    description: 'Limit position list',
    code: `// Limit the ul x position
    <Textarea
      limitToParent
      list={[
        'tacos',
        'blackberry',
        'watermelon',
        'kiwi',
        'chili',
        'lemon',
        'orange',
        'pineaple'
      ]}
    />`
  },
]
