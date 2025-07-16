'use client'

import { useState } from 'react'
import useAgeCalculator from '../hooks/useAgeCalculator'

export default function AgeCalculator() {

  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  const months = Array.from({ length: 12 }, (_, i) => i + 1)
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i)

  const { day, month, year, handleChange, result, calculateAge } = useAgeCalculator()

  console.log('Este es mi dia: ', day)
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
        <h1 className="text-center text-xl font-bold mb-4">Age Calculator</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <select
            name="day"
            value={day}
            onChange={(e) => handleChange(e)}
            className="border rounded p-2"
          >
            <option value="">Day</option>
            {days.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <select
            name="month"
            value={month}
            onChange={(e) => handleChange(e)}
            className="border rounded p-2"
          >
            <option value="">Month</option>
            {months.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>

          <select
            name="year"
            value={year}
            onChange={(e) => handleChange(e)}
            className="border rounded p-2"
          >
            <option value="">Year</option>
            {years.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        <button
          onClick={calculateAge}
          className="w-full bg-blue-500 text-white rounded py-2 mt-3 hover:bg-blue-600 transition"
        >
          Calculate Age
        </button>

        {result && (
          <div className="mt-6 text-center space-y-2">
            <div className="text-blue-600 text-lg font-bold">
              {result.years} <span className="text-black">years</span>
            </div>
            <div className="text-blue-600 text-lg font-bold">
              {result.months} <span className="text-black">months</span>
            </div>
            <div className="text-blue-600 text-lg font-bold">
              {result.days} <span className="text-black">days</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
