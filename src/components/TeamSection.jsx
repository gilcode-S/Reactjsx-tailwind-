import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'

const TeamSection = () => {
  return (
    <div id='team' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Meet the Team' description='A passionate team of digital experts dedicated to your brand success'/>

        <div className='grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-6 w-full max-w-5xl'>
            {
                teamData.map((team, index) => (
                    <div key={index} clsassName="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-graay-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400">
                        <img src={team.image} alt="" className='w-12 h-12 rounded-full'/>
                        <div className='flex-1'>
                            <h3 className='font-bold text-sm'>{team.name}</h3>
                            <p className='text-xs opacity-60'>{team.title}</p>
                        </div>

                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TeamSection