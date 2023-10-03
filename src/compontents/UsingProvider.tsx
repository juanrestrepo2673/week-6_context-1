import ThemeContext from '../providers/ThemeContext'

export default function UsingProvider() {
  return (
    <>
      <ThemeContext.Consumer>
          {
            context => {
              <div>{context?.theme}</div>
            }
          }
      </ThemeContext.Consumer>
    </>
  )
}
