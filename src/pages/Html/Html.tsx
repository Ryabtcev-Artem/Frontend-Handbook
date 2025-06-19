import {Outlet} from "react-router-dom";

type HtmlProps = {}
export default function Html(props: HtmlProps) {
  const {} = props

  return (
    <>
      <Outlet />
    </>
  )
}