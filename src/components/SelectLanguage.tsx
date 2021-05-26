import React from 'react'
import i18n from 'i18next'
import tw from 'twin.macro'
import { GrLanguage } from 'react-icons/gr'

const SelectLanguage = () => {
  const defaultLanguage = localStorage.getItem('pc-language') || 'en'

  return (
    <Container>
      <LanguageIcon />
      <Select
        name="language"
        defaultValue={defaultLanguage}
        onChange={(event) => {
          event.preventDefault()
          localStorage.setItem('pc-language', event.target.value)
          i18n.changeLanguage(event.target.value)
        }}
      >
        <option value="en">English (US)</option>
        <option value="de">German</option>
      </Select>
    </Container>
  )
}

export default SelectLanguage
const Container = tw.div`float-right`
const Select = tw.select`w-40 inline`
const LanguageIcon = tw(GrLanguage)`text-green-600 inline m-4 text-2xl`
