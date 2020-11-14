import { Formik } from "formik";
import React, { Component } from "react";
import apiMovie, { apiMovieMap } from '../../conf/api.movie'

export default class SearchBar extends Component {

    submit = (values, actions) => {
        const query = '?' + Object.keys(values).map(v => `${v}=${values[v]}&`).join('')
        apiMovie.get(`/search/movie${query}`)
        .then(res => res.data.results)
        .then(moviesApi => {
            const movies = moviesApi.map(apiMovieMap)
            this.props.updateMovies(movies)
            actions.setSubmitting(false)
          })
          .catch(err => console.log(err));
    }

    render() {
        return (
            <Formik
                onSubmit={this.submit}
                initialValues={{ query: '', language: 'fr-FR'}}
            >
                {
                    ({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
                        <form className='d-flex p-2 m-2 flew-row' onSubmit={handleSubmit} >
                            <input name='query' className='flex-fill form-control mr-2' placeholder="Search..." onChange={ handleChange } onBlur={ handleBlur } />
                            <select name='language' className='mr-2 form-control w-25' onChange={ handleChange } onBlur={ handleBlur } >
                                <option value='en-US'>Anglais</option>
                                <option value='fr-FR'>Français</option>
                            </select>
                            <button className='btn btn-success' type="submit" disabled={isSubmitting} >Submit</button>
                        </form>
                    )
                }
            </Formik>
        )
    }
}