import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Flex, Input, List, Button } from '@fluentui/react-northstar';
import { SearchIcon } from '@fluentui/react-icons-northstar';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState('programming');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <List.Item
        key={result.pageid}
        className='item'
        header={<h4>{result.title}</h4>}
        content={
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        }
        index={0}
        headerMedia={
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button content='Go' secondary />
          </a>
        }
      />
    );
  });

  return (
    <div className='search-list'>
      <Flex column vAlign='center'>
        <Flex.Item align='center'>
          <Input
            value={term}
            icon={<SearchIcon />}
            placeholder='Search...'
            iconPosition='start'
            onChange={(e) => setTerm(e.target.value)}
            className='input'
          />
        </Flex.Item>
        <List>{renderedResults}</List>
      </Flex>
    </div>
  );
};

export default Search;
