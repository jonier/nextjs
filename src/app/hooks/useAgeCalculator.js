import { useState } from 'react'

export default function useAgeCalculator() {

  const [data, setData] = useState({
    day: '',
    month: '',
    year: ''
  })
  const { day, month, year } = data

  const [result, setResult] = useState(null)


  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  const calculateAge = () => {
    if (!day || !month || !year) return

    const birthDate = new Date(year, month - 1, day)
    const today = new Date()

    let ageYears = today.getFullYear() - birthDate.getFullYear()
    let ageMonths = today.getMonth() - birthDate.getMonth()
    let ageDays = today.getDate() - birthDate.getDate()

    if (ageDays < 0) {
      ageMonths--
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate()
    }

    if (ageMonths < 0) {
      ageYears--
      ageMonths += 12
    }

    setResult({
      years: ageYears,
      months: ageMonths,
      days: ageDays
    })
  }

  return {
    day,
    month,
    year,
    handleChange,
    result,
    calculateAge
  }
}
