import './VsCode.scss'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {vscDarkPlus, vs  } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from "react";
type VsCodeProps = {
  children: React.ReactNode,
}
export default function VsCode(props: VsCodeProps) {
  const {children} = props
  const currentTheme = localStorage.getItem('user-theme')
  return (
    <SyntaxHighlighter
      className="vs-code"
      language={'javascript'}
      style={currentTheme === 'dark' ? vscDarkPlus : vs }
    >
      {children}
    </SyntaxHighlighter>
  )
}