import { styled, Box, BoxProps, Theme } from "@material-ui/core";

interface IContainer extends BoxProps {
  // TODO: Support breakpoints and explicit values
  spacing: number | string;
  as?: React.ElementType;
}

const Container = styled(({ spacing, as, ...props }: IContainer) => (
  <Box {...props} component={as} />
))<Theme, IContainer>({
  display: "flex",
  listStyle: "none",
});

export const VerticalContainer = styled(Container)<Theme, IContainer>(
  ({ theme }) => ({
    flexDirection: "column",
    // Enable for debugging purposes
    // backgroundColor: "lightcyan",
    "& > :not(:first-child)": {
      margin: 0,
      marginTop: ({ spacing }) =>
        typeof spacing === "string" ? spacing : theme.spacing(spacing),
    },
  })
);

export const HorizontalContainer = styled(Container)<Theme, IContainer>(
  ({ theme }) => ({
    flexDirection: "row",
    // Enable for debugging purposes
    // backgroundColor: "pink",
    "& > :not(:first-child)": {
      margin: 0,
      marginLeft: ({ spacing }) =>
        typeof spacing === "string" ? spacing : theme.spacing(spacing),
    },
  })
);
