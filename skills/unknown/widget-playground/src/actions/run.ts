import type { ActionFunction } from '@sdk/types'
import { leon } from '@sdk/leon'

/**
 * Aurora component props
 */

interface Text {
  text: string
  weight?: 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 // TODO: design tokens ("400" default)
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' // TODO: design tokens ("md" default)
  type?: 'primary' | 'secondary' // TODO: design tokens ("primary" default)
}
interface List {
  title: {
    text: string
    align?: 'left' | 'center' | 'right' // TODO: design tokens ("left" default)
  }
}
interface Container {
  direction?: 'row' | 'column' // TODO: design tokens ("row" default)
  align?: 'left' | 'center' | 'right' // TODO: design tokens
}
interface Image {
  path: string
  width?: number
  height?: number
}
interface Checkbox {
  checked: boolean
  label?: string
  disabled?: boolean
  hint?: string
  onChange?: () => void
}
interface Input {
  value: string
  placeholder?: string
  disabled?: boolean
  onChange?: () => void
}
interface Card {}
interface TabGroup {
  tabs: Tab[]
}
interface Tab {
  title: string
  selected?: boolean
  content?: any // TODO
  disabled?: boolean
}

export const run: ActionFunction = async function () {
  /**
   * Forecast
   */

  /*const forecast = new Container(
    [
      new Text({
        text: 'Paris',
        size: 'xl'
      }),
      new Text({
        text: 'Thursday, 1 June',
        type: 'secondary'
      }),
      new Image({
        path: 'thumderstorms.svg'
      }),
      new Text({
        text: '18°',
        size: 'xxl'
      }),
      new Text({
        text: 'Thumderstorms',
        weight: 600 // TODO: not sure
      }),
      new Card({
        width: '100%',
        content: new Container([
          new Container(
            [
              new Image({
                path: 'sun.svg',
                width: 28,
                height: 28
              }),
              new Text({
                text: '1',
                size: 'sm'
              }),
              new Text({
                text: 'UV Index',
                size: 'sm',
                type: 'secondary'
              })
            ],
            {
              direction: 'column'
            }
          ),
          new Container(
            [
              new Image({
                path: 'wind.svg',
                width: 28,
                height: 28
              }),
              new Text({
                text: '10 m/s',
                size: 'sm'
              }),
              new Text({
                text: 'Wind',
                size: 'sm',
                type: 'secondary'
              })
            ],
            {
              direction: 'column'
            }
          ),
          new Container(
            [
              new Image({
                path: 'humidity.svg',
                width: 28,
                height: 28
              }),
              new Text({
                text: '98%',
                size: 'sm'
              }),
              new Text({
                text: 'Humidity',
                size: 'sm',
                type: 'secondary'
              })
            ],
            {
              direction: 'column'
            }
          )
        ])
      }),
      new TabGroup({
        // TabGroup will automatically manage the tab selection state
        tabs: [
          new Tab({
            title: 'Today',
            selected: true,
            content: new ScrollContainer([
              new Card({
                width: 60,
                content: new Container([
                  new Text({
                    text: '10:00',
                    size: 'sm',
                    type: 'secondary'
                  }),
                  new Image({
                    path: 'thumderstorms.svg',
                    width: 28,
                    height: 28
                  }),
                  new Text({
                    text: '15°',
                    size: 'lg',
                    weight: 600
                  })
                ])
              }) // TODO: continue ...
            ])
          }),
          new Tab({
            title: 'Tomorrow'
          }),
          new Tab({
            title: 'Next 7 days'
          })
        ]
      })
    ],
    {
      direction: 'column',
      align: 'center'
    }
  )

  /!**
   * Select music provider
   *!/

  const musicProviderList = new List({
    title: {
      text: 'Select your music provider',
      align: 'center'
    },
    items: [
      {
        content: new Container(
          [
            new Image({ path: 'spotify.svg', width: '', height: '' }) // TODO: props
          ],
          {
            align: 'center'
          }
        ),
        onPress: async () => {
          // TODO: next step
        }
      }
    ]
  })

  await leon.answer({ widget: musicProviderList })

  /!**
   * Todo list
   *!/
  const todoList = new List({
    title: {
      text: 'Shopping List',
      align: 'left'
    },
    items: [
      {
        content: new Container([
          new Checkbox({
            isChecked: true,
            onChange: () => {
              // TODO: toggle todo
            }
          }),
          new Input({
            value: 'Milk',
            onChange: () => {
              // TODO: open modal/dialog to edit current todo
            }
          })
        ])
      }
    ]
  })

  await leon.answer({ widget: todoList })
*/
  /**
   * Random number
   */

  const text = new Text({
    text: '42',
    size: 'xxl'
  })

  await leon.answer({ widget: text })
}
