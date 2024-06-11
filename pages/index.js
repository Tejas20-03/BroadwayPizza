// pages/index.js
import { Page, Navbar, BlockTitle, Block } from "framework7-react";

export default function HomePage() {
  return (
    <Page>
      <Navbar title="Home" />
      <BlockTitle>Welcome to Framework7 with Next.js</BlockTitle>
      <Block strong>
        <p>This is a simple example of using Framework7 with Next.js.</p>
      </Block>
    </Page>
  );
}
