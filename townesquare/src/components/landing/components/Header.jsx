import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import useMatchBreakpoints from "../../../hooks/useMatchBreakpoints"
import { Wrapper } from "../../../styles/common"

export const Header = (props) => {
  const { isMobile } = useMatchBreakpoints()
  const theme = useTheme();
    return (
      <header id='header'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <ContentWrapper className='col-md-12 intro-text'>
                  <h1>
                    {props.data ? props.data.title : 'Loading'}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                  <a
                    href='#contact-us'
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    App Coming Soon
                  </a>{' '}
                  <a
                    href='#features'
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    Read Docs
                  </a>{' '}
                </ContentWrapper>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}

const ContentWrapper = styled(Wrapper)`
  padding: 32px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;