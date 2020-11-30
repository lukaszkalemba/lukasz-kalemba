import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Container from 'components/particles/Container';
import PricingImage from 'components/atoms/PricingImage';
import PricingForm from 'components/molecules/PricingForm';
import Notification from 'components/organisms/Notification';
import S from './PricingContent.styles';

const PricingContent = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);

  return (
    <Container axis="both" doubling="x">
      <S.Wrapper>
        <div>
          <S.Heading isH1>Opowiedz o swoim pomyśle.</S.Heading>
          <AnimatePresence
            exitBeforeEnter
            onExitComplete={() => setSubmissionStatus(null)}
          >
            {submissionStatus && (
              <Notification
                submissionStatus={submissionStatus}
                setSubmissionStatus={setSubmissionStatus}
              />
            )}
          </AnimatePresence>

          <PricingForm setSubmissionStatus={setSubmissionStatus} />
        </div>
        <PricingImage />
      </S.Wrapper>
    </Container>
  );
};

export default PricingContent;
