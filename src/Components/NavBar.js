import React from 'react'
import {Form, FormControl ,Button } from 'react-bootstrap'
import Icons from './Icons'

export default function NavBar() {
    return (
        <div className="row">
            <div className="col-2">
                <img width="50px" height="30px" src="https://logos-marques.com/wp-content/uploads/2021/03/YouTube-logo.png" />
            </div>
            <div className="col-6">
            <Form className="row">
                    <FormControl 
                        type="search"
                        placeholder="Search"
                        className="col-10"
                        aria-label="Search"
                    />
                    <Button  className="secondary col-2">
                        Search
                    </Button>
                </Form>
               
            </div>
            <div className="col-4">
                <div className="row">
                <Icons props="plus"/>
               <Icons props="search"/>
               <Icons props='notifications'/>
               <Icons props='creation'/>
                </div>
              
            </div>

        </div>
    )
}
