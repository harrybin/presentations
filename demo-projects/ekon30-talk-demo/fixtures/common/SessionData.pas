unit SessionData;

{$IFDEF FPC}{$MODE DELPHI}{$H+}{$ENDIF}

interface

type
  TSession = record
    Track: string;
  end;
  TSessions = array of TSession;
  TTrackCount = record
    Track: string;
    Count: Integer;
  end;
  TTrackCounts = array of TTrackCount;

implementation

end.
