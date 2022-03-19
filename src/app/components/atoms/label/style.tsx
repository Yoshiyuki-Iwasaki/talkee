import styled from 'styled-components';

export const Label = styled.p.attrs((props: any) => ({
  fs: props.fs || '14px',
  cl: props.cl || '#333',
  fw: props.fw || '400',
  lh: props.lh || '1.4',
  //共通部分はこの下に書く
}))`
  font-size: ${(props: any) => props.fs};
  color: ${(props: any) => props.cl};
  font-weight: ${(props: any) => props.fw};
  line-height: ${(props: any) => props.lh};
`;