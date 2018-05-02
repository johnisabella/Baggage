import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function SearchForm (props) {
    return (
        <Form>
            <FormGroup>
                <Label for="search-bag-form">Search</Label>
                <Input type="search" name="SearchBagForm" 
                id="SearchBagForm" placeholder="search placeholder" />
            </FormGroup>
        </Form>
    );
}


export default SearchForm;