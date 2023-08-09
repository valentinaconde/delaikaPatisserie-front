"use client";
import { useState } from 'react';
import styles from './categories.module.scss'
import categories from '@/app/utils/categories.utils';

export default function Categories() {
  return (
    <div className={styles.container}>
        <h1>CATEGORIAS</h1>
        {categories.map((category, index) => (
            <a href={`/categorias/${category.id}`} key={index} className={styles.category}>{category.name}</a>
        ))
        }
    </div>
  )
}
