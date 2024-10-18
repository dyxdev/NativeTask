import React from 'react';
import {TasksScreen} from "@/screens/tasks"
import { Layout } from '@/components/Layout';
import { translate } from '@/i18n';

export default function TasksTab() {
  return (
    <Layout icon='book' title={translate("taskScreen.title")}>
        <TasksScreen/>
    </Layout>
  );
}

