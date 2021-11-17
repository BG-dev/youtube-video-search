import React from "react";
import { Button } from "../components"
import { Field, reduxForm } from "redux-form";

import '../scss/components/search-panel.scss'

const onSubmit = (values) => console.log(values.searchRequest)

let SearchPanel = ({handleSubmit}) => {
    return(
        <div className="search">
            <form onSubmit={handleSubmit} className="search__form">
                <Field component={"input"} name={"searchRequest"} placeholder={"Search"} type="text" className="search__form-input" />
                <Button 
                    className = "search__form-button"
                >
                    Search
                </Button>
            </form>
        </div>
    )
}

SearchPanel = reduxForm({
    form: 'search',
    onSubmit,
})(SearchPanel)

export default SearchPanel;