import React from 'react';
import {TasksScreen} from "@/screens/tasks"
import { Layout } from '@/components/Layout';

export default function TasksTab() {
  return (
    <Layout icon='book' title='Taks'>
        <TasksScreen/>
    </Layout>
  );
}

