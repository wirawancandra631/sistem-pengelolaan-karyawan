import React from 'react';

export function Table({ children }) {
  return <table className="w-full text-sm text-center mt-4">{children}</table>;
}
export function Thead({ children }) {
  return <thead>{children}</thead>;
}
export function Tbody({ children }) {
  return <tbody>{children}</tbody>;
}
export function Tr({ children }) {
  return <tr>{children}</tr>;
}
export function Th({ children }) {
  return <th className="p-3 border border-slate-200 bg-slate-100">{children}</th>;
}
export function Td({ children }) {
  return <td className="p-2 border border-slate-300 bg-white">{children}</td>;
}
