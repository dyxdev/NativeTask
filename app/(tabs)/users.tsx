import React from 'react';
import {MockScreen} from "@/screens/mock"
import { Layout } from '@/components/Layout';
import { translate } from '@/i18n';

export default function MockTab() {
  return (
    <Layout icon='person' title={translate("userScreen.title")}>
        <MockScreen/>
    </Layout>
  );
}
