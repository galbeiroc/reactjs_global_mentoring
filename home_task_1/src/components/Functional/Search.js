import { useState } from 'react';
import { companies } from '../../data/companies';

function FunctionalSearch() {
  const [query, setQuery] = useState("");

  const onChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className='content-search'>
      <h2 className='title'>Search</h2>
        <input
          onChange={(e) => onChange(e)}
          placeholder='Enter name to search'
          type='text'
          value={query}
        />
        {
          companies.filter((company) => {
            if (query === '') {
              return company
            } else if (company.title.toLowerCase().includes(query.toLowerCase())) {
              return company
            } else {
              return null
            }
          }).map((company, index) => (
            <div className="box" key={index}>
              <p className='title-company'>{company.title}</p>
              <p>{company.description}</p>
              <p>{company.founder}</p>
            </div>
          ))
        }
    </div>
  )
}

export default FunctionalSearch;
