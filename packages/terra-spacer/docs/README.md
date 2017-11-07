# Terra Spacer

This component is needed to provide a scalar spacing between various components and to help drive a unified spacing system.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-spacer`
  - `yarn add install terra-spacer`

## Usage

```jsx
import React from 'react';
import Spacer from 'terra-spacer';

// small view ports
<Spacer marginTop="small" marginLeft="small-1" paddingTop="small-2">
  <Table isStriped={false}>
    <Table.Header>
      <Table.HeaderCell content="Name" key="NAME" minWidth="small" />
    </Table.Header>
    <Table.Rows>
      <Table.Row key="PERSON_0">
        <Table.Cell content="John Smith" key="NAME" />
      </Table.Row>
  </Table>
<Spacer/>

// medium view ports
<Spacer marginLeft="medium" marginRight="medium">
  <Table isStriped={false}>
    <Table.Header>
      <Table.HeaderCell content="Name" key="NAME" minWidth="small" />
    </Table.Header>
    <Table.Rows>
      <Table.Row key="PERSON_0">
        <Table.Cell content="John Smith" key="NAME" />
      </Table.Row>
  </Table>
<Spacer/>

// large and very large view ports
<Spacer paddingTop="large" paddingBottom="large+1" paddingLeft="large+2" marginLeft="large+4" marginRight="large+3">
  <Table isStriped={false}>
    <Table.Header>
      <Table.HeaderCell content="Name" key="NAME" minWidth="small" />
    </Table.Header>
    <Table.Rows>
      <Table.Row key="PERSON_0">
        <Table.Cell content="John Smith" key="NAME" />
      </Table.Row>
  </Table>
<Spacer/>
```

## Component Features

<!-- Uncomment supported features.
 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
 -->