import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Footer, Text } from './CopyrightStyles';

export const Copyright = () => {
  return (
    <Footer>
      <Text> Copyright © Created by </Text>
      <Link color="inherit" href="https://github.com/IgorSedura">
        Igor Sedura <ExternalLinkIcon mx="2px" />
      </Link>
    </Footer>
  );
};
