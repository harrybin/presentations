unit SessionCatalog;

{$IFDEF FPC}{$MODE DELPHI}{$H+}{$ENDIF}

interface

uses SessionData;

function CountSessionsByTrack(const Sessions: TSessions): TTrackCounts;

implementation

uses SysUtils;

function CountSessionsByTrack(const Sessions: TSessions): TTrackCounts;
var
  I, J, Found: Integer;
begin
  Result := nil;
  for I := 0 to High(Sessions) do
  begin
    Found := -1;
    for J := 0 to High(Result) do
      if SameText(Result[J].Track, Sessions[I].Track) then
      begin
        Found := J;
        Break;
      end;
    if Found = -1 then
    begin
      Found := Length(Result);
      SetLength(Result, Found + 1);
      Result[Found].Track := Sessions[I].Track;
      Result[Found].Count := 0;
    end;
    Inc(Result[Found].Count);
  end;
end;

end.
