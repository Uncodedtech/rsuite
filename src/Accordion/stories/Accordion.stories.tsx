import React from 'react';
import type { StoryObj } from '@storybook/react';
import CreativeIcon from '@rsuite/icons/Creative';
import FolderFillIcon from '@rsuite/icons/FolderFill';
import CheckRoundIcon from '@rsuite/icons/CheckRound';
import Avatar from '../../Avatar';
import Stack from '../../Stack';
import Accordion from '../';
import { createMeta } from '@/storybook/utils';
import '../styles/index.less';
import '../../Avatar/styles/index.less';
import '../../Stack/styles/index.less';

const meta = createMeta(Accordion);

export default {
  title: 'Components/Accordion',
  ...meta
};

type Story = StoryObj<typeof meta>;

const defaultArgs = {
  children: (
    <>
      <Accordion.Panel header="Accordion Panel 1" defaultExpanded>
        <p>Accordion Body 1</p>
      </Accordion.Panel>
      <Accordion.Panel header="Accordion Panel 2">
        <p>Accordion Body 2</p>
      </Accordion.Panel>
      <Accordion.Panel header="Accordion Panel 3">
        <p>Accordion Body 3</p>
      </Accordion.Panel>
    </>
  )
};

export const Default: Story = {
  args: {
    ...defaultArgs
  }
};

export const Bordered: Story = {
  args: {
    ...defaultArgs,
    bordered: true
  }
};

export const ExpandOnlyOnePanel: Story = {
  args: {
    ...defaultArgs,
    defaultActiveKey: 1,
    children: (
      <>
        <Accordion.Panel header="Accordion Panel 1" defaultExpanded eventKey={1}>
          <p>Accordion Body 1</p>
        </Accordion.Panel>
        <Accordion.Panel header="Accordion Panel 2" eventKey={2}>
          <p>Accordion Body 2</p>
        </Accordion.Panel>
        <Accordion.Panel header="Accordion Panel 3" eventKey={3}>
          <p>Accordion Body 3</p>
        </Accordion.Panel>
      </>
    )
  }
};

export const CustomIndicator: Story = {
  args: {
    ...defaultArgs,
    children: (
      <>
        <Accordion.Panel header="Accordion Panel 1" eventKey={1} caretAs={CreativeIcon}>
          <p>Accordion Body 1</p>
        </Accordion.Panel>
        <Accordion.Panel header="Accordion Panel 2" eventKey={2} caretAs={FolderFillIcon}>
          <p>Accordion Body 2</p>
        </Accordion.Panel>
        <Accordion.Panel header="Accordion Panel 3" eventKey={3} caretAs={CheckRoundIcon}>
          <p>Accordion Body 3</p>
        </Accordion.Panel>
      </>
    )
  }
};

const Header = props => {
  const { avatarUrl, title, subtitle, ...rest } = props;
  return (
    <Stack {...rest} spacing={10} alignItems="flex-start">
      <Avatar src={avatarUrl} alt={title} />
      <Stack spacing={2} direction="column" alignItems="flex-start">
        <div>{title}</div>
        <div style={{ color: 'var(--rs-text-secondary)', fontSize: 12 }}>{subtitle}</div>
      </Stack>
    </Stack>
  );
};

export const CustomHeader: Story = {
  args: {
    ...defaultArgs,
    children: (
      <>
        <Accordion.Panel
          header={
            <Header
              avatarUrl="https://avatars.githubusercontent.com/u/6412038"
              title="React"
              subtitle="The library for web and native user interfaces"
            />
          }
          eventKey={1}
        >
          React is a JavaScript library for building user interfaces.
          <p>
            <strong> Declarative:</strong> React makes it painless to create interactive UIs. Design
            simple views for each state in your application, and React will efficiently update and
            render just the right components when your data changes. Declarative views make your
            code more predictable, simpler to understand, and easier to debug.
          </p>
          <p>
            <strong>Component-Based:</strong> Build encapsulated components that manage their own
            state, then compose them to make complex UIs. Since component logic is written in
            JavaScript instead of templates, you can easily pass rich data through your app and keep
            the state out of the DOM.
          </p>
          <p>
            <strong>Learn Once, Write Anywhere:</strong> We don&apos;t make assumptions about the
            rest of your technology stack, so you can develop new features in React without
            rewriting existing code. React can also render on the server using Node and power mobile
            apps using React Native.
          </p>
        </Accordion.Panel>
        <Accordion.Panel
          header={
            <Header
              avatarUrl="https://avatars.githubusercontent.com/u/6128107"
              title="Vue"
              subtitle="🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web."
            />
          }
          eventKey={2}
        >
          Vue is a JavaScript framework for building user interfaces. It builds on top of standard
          HTML, CSS, and JavaScript and provides a declarative and component-based programming model
          that helps you efficiently develop user interfaces, be they simple or complex.
        </Accordion.Panel>
        <Accordion.Panel
          header={
            <Header
              avatarUrl="https://avatars.githubusercontent.com/u/139426"
              title="Angular"
              subtitle="Deliver web apps with confidence 🚀"
            />
          }
          eventKey={3}
        >
          Angular is a web framework that empowers developers to build fast, reliable applications.
          Maintained by a dedicated team at Google, Angular provides a broad suite of tools, APIs,
          and libraries to simplify and streamline your development workflow. Angular gives you a
          solid platform on which to build fast, reliable applications that scale with both the size
          of your team and the size of your codebase.
        </Accordion.Panel>
      </>
    )
  }
};
