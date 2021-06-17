import React, { useState } from 'react'


const SearchBar = ({onTermSubmit}) => {
    const [term, setTerm] = useState('React Javascript')
    // const onFormSubmit = props.onFormSubmit OR rather than props in the params deconstruct as {onFormSubmit}
    // This event param is someone submitting the form
    const onSubmit = (event => {
        event.preventDefault()

        onTermSubmit(term)
    })
    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={term} onChange={event => setTerm(event.target.value)} />
                </div>
            </form>
        </div>
    )

}

export default SearchBar