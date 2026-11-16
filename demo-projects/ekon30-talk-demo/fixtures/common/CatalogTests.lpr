program CatalogTests;

{$IFDEF FPC}{$MODE DELPHI}{$H+}{$ENDIF}

uses SysUtils, SessionData, SessionCatalog;

var
  Checks: Integer = 0;

procedure Check(Condition: Boolean; const Description: string);
begin
  if not Condition then
    raise Exception.Create('FAIL: ' + Description);
  Inc(Checks);
  WriteLn('PASS: ', Description);
end;

procedure RunChecks;
var
  Sessions: TSessions;
  Counts: TTrackCounts;
begin
  Check(Length(CountSessionsByTrack(nil)) = 0, 'Leere Eingabe');
  Sessions := nil;
  SetLength(Sessions, 5);
  Sessions[0].Track := 'KI';
  Sessions[1].Track := 'Delphi';
  Sessions[2].Track := 'KI';
  Sessions[3].Track := 'ki';
  Sessions[4].Track := '';
  Counts := CountSessionsByTrack(Sessions);
  Check(Length(Counts) = 4, 'KI und ki sind getrennte Tracks');
  Check((Counts[0].Track = 'KI') and (Counts[0].Count = 2), 'KI wird zweimal gezaehlt');
  Check((Counts[1].Track = 'Delphi') and (Counts[1].Count = 1), 'Erstes Auftreten bestimmt Reihenfolge');
  Check((Counts[2].Track = 'ki') and (Counts[2].Count = 1), 'Kleinschreibung bleibt erhalten');
  Check((Counts[3].Track = '') and (Counts[3].Count = 1), 'Leerer Track ist eigener Schluessel');
  Counts[0].Track := 'Geaendert';
  Check((Sessions[0].Track = 'KI') and (Sessions[1].Track = 'Delphi')
    and (Sessions[2].Track = 'KI') and (Sessions[3].Track = 'ki')
    and (Sessions[4].Track = ''), 'Eingabe bleibt unveraendert');
end;

begin
  try
    RunChecks;
    WriteLn(Checks, ' Checks bestanden.');
  except
    on E: Exception do
    begin
      WriteLn(StdErr, E.Message);
      Halt(1);
    end;
  end;
end.
