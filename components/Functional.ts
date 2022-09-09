import { FunctionalComponent } from "vue"

type Props = {
  myProp: string
}
const Functional: FunctionalComponent<Props> = (props, ctx) => {
  return h('div', props.myProp)
}
Functional.props = ['myProp']
export default Functional

