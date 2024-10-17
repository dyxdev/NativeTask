import React from 'react';
import {MockScreen} from "@/screens/mock"
import { Layout } from '@/components/Layout';

export default function MockTab() {
  return (
    <Layout icon='person' title='Users'>
        <MockScreen/>
    </Layout>
  );
}
