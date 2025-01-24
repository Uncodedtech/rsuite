import React from 'react';
import { Stack, useBreakpointValue, Avatar, Button } from 'rsuite';
import DefaultPage from '@/components/Page';
import ImportGuide from '@/components/ImportGuide';

const inDocsComponents = {
  'import-guide': () => <ImportGuide components={['useBreakpointValue']} hasCssComponents={[]} />
};

export default function Page() {
  return (
    <DefaultPage
      inDocsComponents={inDocsComponents}
      dependencies={{
        useBreakpointValue,
        Avatar,
        Stack,
        Button
      }}
    />
  );
}
