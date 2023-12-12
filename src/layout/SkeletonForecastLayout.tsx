import { GridCol, Skeleton } from '@mantine/core';

export const SkeletonForecastLayout = () => {
  return (
    <GridCol span={12} p={0} m={0}>
      <Skeleton height={145} width={'100%'} radius={'lg'} />
    </GridCol>
  );
};
