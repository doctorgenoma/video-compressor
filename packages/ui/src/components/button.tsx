import type { ButtonHTMLAttributes } from 'react';
export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) { return <button {...props} style={{padding:'10px 14px',borderRadius:10,border:'1px solid #334155',background:'#2563eb',color:'white',cursor:'pointer',opacity:props.disabled ? 0.5 : 1}} />; }
