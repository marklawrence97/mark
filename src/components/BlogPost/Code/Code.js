import React from 'react';
import CodeSnippit from './CodeSnippit';

const Code = ({ article }) => {
    return (
        <CodeSnippit language={article.codeSnippit.language} code={article.codeSnippit.content}/>
    )
}

export default Code