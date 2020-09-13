import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Container from 'components/particles/Container';
import PricingImage from 'components/atoms/PricingImage';
import PricingForm from 'components/molecules/PricingForm';
import Notification from 'components/organisms/Notification';
import S from './PricingContent.styles';

const PricingContent = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [offset, setOffset] = useState(null);

  return (
    <Container axis="both" doubling="x">
      <S.Wrapper>
        <div>
          <S.Heading>Opowiedz o swoim pomyśle.</S.Heading>
          <AnimatePresence
            exitBeforeEnter
            onExitComplete={() => setSubmissionStatus(null)}
          >
            {submissionStatus && (
              <Notification
                submissionStatus={submissionStatus}
                setSubmissionStatus={setSubmissionStatus}
                offset={offset}
              />
            )}
          </AnimatePresence>

          <PricingForm
            setSubmissionStatus={setSubmissionStatus}
            setOffset={setOffset}
          />
        </div>
        <PricingImage />
      </S.Wrapper>
    </Container>
  );
};

export default PricingContent;
