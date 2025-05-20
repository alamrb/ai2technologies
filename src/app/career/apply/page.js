'use client'
import React, { useEffect, useState } from 'react'
import Develop from '@/app/services/developForm/develop'

export default function Apply() {
    const form_id = '2401110004'

    return (
        <Develop data={form_id} />
    )
}
