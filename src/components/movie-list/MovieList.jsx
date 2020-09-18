import React, {Component} from 'react'
import { MovieElement } from '..'

export default class MoviesList extends Component {
    render() {
        return(
            <div className="w-75 d-flex flex-row flex-wrap align-content-start">
                <MovieElement/>
                <MovieElement/>
                <MovieElement/>
                <MovieElement/>
                <MovieElement/>
                <MovieElement/>
                <MovieElement/>
                <MovieElement/>
                <MovieElement/>
            </div>
        )
    }
}