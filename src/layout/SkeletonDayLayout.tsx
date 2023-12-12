import { GridCol, Skeleton } from '@mantine/core';

export const SkeletonDayLayout = () => {
  return (
    <GridCol span={{ xl: 4, lg: 4, md: 5, sm: 12, xs: 12 }}>
      <Skeleton height={'100%'} radius={'lg'} />
    </GridCol>
  );
};
