"use client";
import { useState } from 'react';
import styles from './categories.module.scss'
import categories from '@/app/utils/categories.utils';
import { useParams } from 'next/navigation';

export default function Categories() {


  const params = useParams()

  return (
    <div className={styles.container}>
      <h1>CATEGORIAS</h1>
      {categories.map((category, index) => (
        <a href={`/categorias/${category.id}`} key={index} className={category.id === Number(params.id) ?
          `${styles.category} ${styles.categorySelected}` : styles.category}>{category.name}</a>
      ))
      }
    </div>
  )
}
