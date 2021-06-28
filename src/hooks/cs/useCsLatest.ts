import { useEffect, useState } from "react";
import {
  CSLatest,
  CSHookResponse,
  CSResponse,
  CSCurrencies,
} from "../../interfaces/cs";
import settings from "../../settings";
import { processCsError } from "../../utils/generic";

export default (base: CSCurrencies) => {
  const [latest, setLatest] = useState<CSHookResponse<CSLatest> | null>(null);

  useEffect(() => {
    if (latest != null) setLatest(null);
    const func = async () => {
      try {
        const res = await settings.axios.cs.get<CSResponse<CSLatest>>(
          "/latest",
          { params: { base } }
        );

        setLatest({
          data: res.data.response,
        });
      } catch (err) {
        setLatest({ error: processCsError(err) });
      }
    };
    func();
  }, [base, setLatest]);

  return latest;
};
