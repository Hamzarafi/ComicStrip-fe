export const formatTranscript = (transcript: string): JSX.Element[] => {
  const lines = transcript.split("\n"); // Split transcript into lines

  return lines.map((line, index) => {
    // Handle [[...]] as paragraph tags
    if (line.startsWith("[[") && line.endsWith("]]")) {
      const content = line.slice(2, -2);
      return (
        <p key={index} style={{ fontWeight: "normal" }}>
          {content}
        </p>
      );
    }

    // Handle {{...}} as bold tags
    if (line.startsWith("{{") && line.endsWith("}}")) {
      const content = line.slice(2, -2);
      return (
        <b key={index}>
          {content}
        </b>
      );
    }

    // Handle ((...)) as italic tags
    if (line.startsWith("((") && line.endsWith("))")) {
      const content = line.slice(2, -2);
      return (
        <i key={index}>
          {content}
        </i>
      );
    }

    // Return the line as normal text for default case
    return (
      <span key={index}>
        {line}
      </span>
    );
  });
};