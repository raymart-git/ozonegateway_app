import React, { useState, useEffect } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Dropdown = ({ label, options, value, onChange }) => {
  const [search, setSearch] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  const handleMenuItemClick = (option) => {
    onChange({ target: { value: option.value } });
  };

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearch(searchValue);
    setFilteredOptions(
      options.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

  const selectedLabel =
    options.find((option) => option.value === value)?.label || 'Select Site';

  return (
    <FormControl>
      {/* <FormLabel color="white">{label}</FormLabel> */}
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          color="white"
          bg='rgb(19,21,54)'
          border="transparent"
          borderRadius="20px"
          fontSize="sm"
          size="lg"
          w={{ base: '100%', md: '346px' }}
          maxW="100%"
          h="46px"
          _hover={{ bg: 'gray.700' }}
          _expanded={{ bg: 'gray.800' }}
          _focus={{ boxShadow: 'outline' }}
        >
          {selectedLabel}
        </MenuButton>
        <MenuList
          bg="black"
          border="transparent"
          borderRadius="20px"
          maxH="200px"
          overflowY="auto"
          minW={{ base: '100%', md: '346px' }}  // Ensuring the width of the MenuList matches the Button
          w={{ base: '100%', md: '346px' }}
        >
          <Box p={2}>
            <Input
              placeholder="Search..."
              value={search}
              onChange={handleSearchChange}
              color="white"
              bg="gray.700"
              border="transparent"
              borderRadius="10px"
              mb={2}
              _placeholder={{ color: 'gray.300' }}
            />
          </Box>
          {filteredOptions.map((option, index) => (
            <MenuItem
              key={index}
              value={option.value}
              onClick={() => handleMenuItemClick(option)}
              _hover={{ bg: 'gray.700' }}
              _focus={{ bg: 'gray.600' }}
              style={{ color: 'white' }}
              minW={{ base: '100%', md: '346px' }}  // Ensuring the width of the MenuItem matches the Button
              w={{ base: '100%', md: '346px' }}
            >
              {option.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </FormControl>
  );
};

export default Dropdown;





// 