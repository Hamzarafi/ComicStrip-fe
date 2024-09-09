export const formatTranscript = (transcript: string): JSX.Element[] => {
  const formatted = transcript
    .replace(/\[\[/g, "<p>") // Replace [[ with <p> to mark the start of a paragraph
    .replace(/\]\]/g, "</p>") // Replace ]] with </p> to mark the end of a paragraph
    .replace(/\{\{/g, "<b>") // Replace {{ with <i> to start italic text (for alt text)
    .replace(/\}\}/g, "</b>") // Replace }} with </i> to end italic text
    .replace(/\(\(/g, "<i>") // Replace {{ with <i> to start italic text (for alt text)
    .replace(/\)\)/g, "</i>"); // Replace }} with </i> to end italic text

  return formatted
    .split("\n")
    .map((line, index) => (
      <div key={index} dangerouslySetInnerHTML={{ __html: line }} />
    ));
};
