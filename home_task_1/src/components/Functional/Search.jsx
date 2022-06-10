import { useCallback, useEffect, useState } from 'react';
import { companies } from '../../data/companies';
import './Search.scss';

export const FunctionalSearch = () => {
  const [query, setQuery] = useState("");
  const [filteredCompanies, setFilteredAllCompanies] = useState([]);

  useEffect(() => {
    setFilteredAllCompanies(
      companies.filter((company) => company.title.toLowerCase().includes(query.toLowerCase()))
    )
  }, [query])

  const onChange = useCallback((e) => {
    setQuery(e.target.value)
  }, [])

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
          filteredCompanies.map((company, index) => (
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
